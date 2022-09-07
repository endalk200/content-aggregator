import { PrismaService } from "nestjs-prisma"
import { Prisma, Content, Collection } from "@prisma/client"

export class ContentServiceBase {
    constructor(protected readonly prisma: PrismaService) {}

    async count<T extends Prisma.ContentFindManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>
    ): Promise<number> {
        return this.prisma.content.count(args)
    }

    async findMany<T extends Prisma.ContentFindManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>
    ): Promise<Content[]> {
        return this.prisma.content.findMany(args)
    }
    async findOne<T extends Prisma.ContentFindUniqueArgs>(
        args: Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>
    ): Promise<Content | null> {
        return this.prisma.content.findUnique(args)
    }
    async create<T extends Prisma.ContentCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ContentCreateArgs>
    ): Promise<Content> {
        return this.prisma.content.create<T>(args)
    }
    async update<T extends Prisma.ContentUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ContentUpdateArgs>
    ): Promise<Content> {
        return this.prisma.content.update<T>(args)
    }
    async delete<T extends Prisma.ContentDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.ContentDeleteArgs>
    ): Promise<Content> {
        return this.prisma.content.delete(args)
    }

    async getCollection(parentId: string): Promise<Collection | null> {
        return this.prisma.content
            .findUnique({
                where: { id: parentId },
            })
            .collection()
    }
}
