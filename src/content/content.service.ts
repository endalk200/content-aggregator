import { Injectable } from "@nestjs/common"
import { PrismaService } from "nestjs-prisma"
import { ContentServiceBase } from "./base/content.service.base"

@Injectable()
export class ContentService extends ContentServiceBase {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma)
    }
}
