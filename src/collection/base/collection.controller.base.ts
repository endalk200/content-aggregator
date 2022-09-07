import * as common from "@nestjs/common"
import * as swagger from "@nestjs/swagger"
import * as nestAccessControl from "nest-access-control"
import * as defaultAuthGuard from "../../auth/defaultAuth.guard"
import { isRecordNotFoundError } from "../../prisma.util"
import * as errors from "../../errors"
import { Request } from "express"
import { plainToClass } from "class-transformer"
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator"
import { CollectionService } from "../collection.service"
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor"
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor"
import { CollectionCreateInput } from "./CollectionCreateInput"
import { CollectionWhereInput } from "./CollectionWhereInput"
import { CollectionWhereUniqueInput } from "./CollectionWhereUniqueInput"
import { CollectionFindManyArgs } from "./CollectionFindManyArgs"
import { CollectionUpdateInput } from "./CollectionUpdateInput"
import { Collection } from "./Collection"
import { ContentFindManyArgs } from "../../content/base/ContentFindManyArgs"
import { Content } from "../../content/base/Content"
import { ContentWhereUniqueInput } from "../../content/base/ContentWhereUniqueInput"
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CollectionControllerBase {
    constructor(
        protected readonly service: CollectionService,
        protected readonly rolesBuilder: nestAccessControl.RolesBuilder
    ) {}

    @common.UseInterceptors(AclValidateRequestInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "create",
        possession: "any",
    })
    @common.Post()
    @swagger.ApiCreatedResponse({ type: Collection })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async create(@common.Body() data: CollectionCreateInput): Promise<Collection> {
        return await this.service.create({
            data: data,
            select: {
                createdAt: true,
                descriptions: true,
                id: true,
                numContents: true,
                title: true,
                updatedAt: true,
            },
        })
    }

    @common.UseInterceptors(AclFilterResponseInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "read",
        possession: "any",
    })
    @common.Get()
    @swagger.ApiOkResponse({ type: [Collection] })
    @swagger.ApiForbiddenResponse()
    @ApiNestedQuery(CollectionFindManyArgs)
    async findMany(@common.Req() request: Request): Promise<Collection[]> {
        const args = plainToClass(CollectionFindManyArgs, request.query)
        return this.service.findMany({
            ...args,
            select: {
                createdAt: true,
                descriptions: true,
                id: true,
                numContents: true,
                title: true,
                updatedAt: true,
            },
        })
    }

    @common.UseInterceptors(AclFilterResponseInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "read",
        possession: "own",
    })
    @common.Get("/:id")
    @swagger.ApiOkResponse({ type: Collection })
    @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async findOne(
        @common.Param() params: CollectionWhereUniqueInput
    ): Promise<Collection | null> {
        const result = await this.service.findOne({
            where: params,
            select: {
                createdAt: true,
                descriptions: true,
                id: true,
                numContents: true,
                title: true,
                updatedAt: true,
            },
        })
        if (result === null) {
            throw new errors.NotFoundException(
                `No resource was found for ${JSON.stringify(params)}`
            )
        }
        return result
    }

    @common.UseInterceptors(AclValidateRequestInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "update",
        possession: "any",
    })
    @common.Patch("/:id")
    @swagger.ApiOkResponse({ type: Collection })
    @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async update(
        @common.Param() params: CollectionWhereUniqueInput,
        @common.Body() data: CollectionUpdateInput
    ): Promise<Collection | null> {
        try {
            return await this.service.update({
                where: params,
                data: data,
                select: {
                    createdAt: true,
                    descriptions: true,
                    id: true,
                    numContents: true,
                    title: true,
                    updatedAt: true,
                },
            })
        } catch (error) {
            if (isRecordNotFoundError(error)) {
                throw new errors.NotFoundException(
                    `No resource was found for ${JSON.stringify(params)}`
                )
            }
            throw error
        }
    }

    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "delete",
        possession: "any",
    })
    @common.Delete("/:id")
    @swagger.ApiOkResponse({ type: Collection })
    @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async delete(
        @common.Param() params: CollectionWhereUniqueInput
    ): Promise<Collection | null> {
        try {
            return await this.service.delete({
                where: params,
                select: {
                    createdAt: true,
                    descriptions: true,
                    id: true,
                    numContents: true,
                    title: true,
                    updatedAt: true,
                },
            })
        } catch (error) {
            if (isRecordNotFoundError(error)) {
                throw new errors.NotFoundException(
                    `No resource was found for ${JSON.stringify(params)}`
                )
            }
            throw error
        }
    }

    @common.UseInterceptors(AclFilterResponseInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Content",
        action: "read",
        possession: "any",
    })
    @common.Get("/:id/contents")
    @ApiNestedQuery(ContentFindManyArgs)
    async findManyContents(
        @common.Req() request: Request,
        @common.Param() params: CollectionWhereUniqueInput
    ): Promise<Content[]> {
        const query = plainToClass(ContentFindManyArgs, request.query)
        const results = await this.service.findContents(params.id, {
            ...query,
            select: {
                canonicalUrl: true,

                collection: {
                    select: {
                        id: true,
                    },
                },

                createdAt: true,
                id: true,
                name: true,
                thumbnailSrc: true,
                updatedAt: true,
            },
        })
        if (results === null) {
            throw new errors.NotFoundException(
                `No resource was found for ${JSON.stringify(params)}`
            )
        }
        return results
    }

    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "update",
        possession: "any",
    })
    @common.Post("/:id/contents")
    async connectContents(
        @common.Param() params: CollectionWhereUniqueInput,
        @common.Body() body: ContentWhereUniqueInput[]
    ): Promise<void> {
        const data = {
            contents: {
                connect: body,
            },
        }
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        })
    }

    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "update",
        possession: "any",
    })
    @common.Patch("/:id/contents")
    async updateContents(
        @common.Param() params: CollectionWhereUniqueInput,
        @common.Body() body: ContentWhereUniqueInput[]
    ): Promise<void> {
        const data = {
            contents: {
                set: body,
            },
        }
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        })
    }

    @nestAccessControl.UseRoles({
        resource: "Collection",
        action: "update",
        possession: "any",
    })
    @common.Delete("/:id/contents")
    async disconnectContents(
        @common.Param() params: CollectionWhereUniqueInput,
        @common.Body() body: ContentWhereUniqueInput[]
    ): Promise<void> {
        const data = {
            contents: {
                disconnect: body,
            },
        }
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        })
    }
}
