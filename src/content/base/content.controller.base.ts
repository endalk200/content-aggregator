import * as common from "@nestjs/common"
import * as swagger from "@nestjs/swagger"
import * as nestAccessControl from "nest-access-control"
import * as defaultAuthGuard from "../../auth/defaultAuth.guard"
import { isRecordNotFoundError } from "../../prisma.util"
import * as errors from "../../errors"
import { Request } from "express"
import { plainToClass } from "class-transformer"
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator"
import { ContentService } from "../content.service"
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor"
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor"
import { ContentCreateInput } from "./ContentCreateInput"
import { ContentWhereInput } from "./ContentWhereInput"
import { ContentWhereUniqueInput } from "./ContentWhereUniqueInput"
import { ContentFindManyArgs } from "./ContentFindManyArgs"
import { ContentUpdateInput } from "./ContentUpdateInput"
import { Content } from "./Content"
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContentControllerBase {
    constructor(
        protected readonly service: ContentService,
        protected readonly rolesBuilder: nestAccessControl.RolesBuilder
    ) {}

    @common.UseInterceptors(AclValidateRequestInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Content",
        action: "create",
        possession: "any",
    })
    @common.Post()
    @swagger.ApiCreatedResponse({ type: Content })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async create(@common.Body() data: ContentCreateInput): Promise<Content> {
        return await this.service.create({
            data: {
                ...data,

                collection: data.collection
                    ? {
                          connect: data.collection,
                      }
                    : undefined,
            },
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
    }

    @common.UseInterceptors(AclFilterResponseInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Content",
        action: "read",
        possession: "any",
    })
    @common.Get()
    @swagger.ApiOkResponse({ type: [Content] })
    @swagger.ApiForbiddenResponse()
    @ApiNestedQuery(ContentFindManyArgs)
    async findMany(@common.Req() request: Request): Promise<Content[]> {
        const args = plainToClass(ContentFindManyArgs, request.query)
        return this.service.findMany({
            ...args,
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
    }

    @common.UseInterceptors(AclFilterResponseInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Content",
        action: "read",
        possession: "own",
    })
    @common.Get("/:id")
    @swagger.ApiOkResponse({ type: Content })
    @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async findOne(
        @common.Param() params: ContentWhereUniqueInput
    ): Promise<Content | null> {
        const result = await this.service.findOne({
            where: params,
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
        if (result === null) {
            throw new errors.NotFoundException(
                `No resource was found for ${JSON.stringify(params)}`
            )
        }
        return result
    }

    @common.UseInterceptors(AclValidateRequestInterceptor)
    @nestAccessControl.UseRoles({
        resource: "Content",
        action: "update",
        possession: "any",
    })
    @common.Patch("/:id")
    @swagger.ApiOkResponse({ type: Content })
    @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async update(
        @common.Param() params: ContentWhereUniqueInput,
        @common.Body() data: ContentUpdateInput
    ): Promise<Content | null> {
        try {
            return await this.service.update({
                where: params,
                data: {
                    ...data,

                    collection: data.collection
                        ? {
                              connect: data.collection,
                          }
                        : undefined,
                },
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
        resource: "Content",
        action: "delete",
        possession: "any",
    })
    @common.Delete("/:id")
    @swagger.ApiOkResponse({ type: Content })
    @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
    @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async delete(
        @common.Param() params: ContentWhereUniqueInput
    ): Promise<Content | null> {
        try {
            return await this.service.delete({
                where: params,
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
        } catch (error) {
            if (isRecordNotFoundError(error)) {
                throw new errors.NotFoundException(
                    `No resource was found for ${JSON.stringify(params)}`
                )
            }
            throw error
        }
    }
}
