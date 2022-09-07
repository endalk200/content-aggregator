import { PrismaService } from "nestjs-prisma"
import { Prisma, Collection, Content } from "@prisma/client"

export class CollectionServiceBase {
    constructor(protected readonly prisma: PrismaService) {}

    async count<T extends Prisma.CollectionFindManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>
    ): Promise<number> {
        return this.prisma.collection.count(args)
    }

    async findMany<T extends Prisma.CollectionFindManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>
    ): Promise<Collection[]> {
        return this.prisma.collection.findMany(args)
    }
    async findOne<T extends Prisma.CollectionFindUniqueArgs>(
        args: Prisma.SelectSubset<T, Prisma.CollectionFindUniqueArgs>
    ): Promise<Collection | null> {
        return this.prisma.collection.findUnique(args)
    }
    async create<T extends Prisma.CollectionCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.CollectionCreateArgs>
    ): Promise<Collection> {
        return this.prisma.collection.create<T>(args)
    }
    async update<T extends Prisma.CollectionUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.CollectionUpdateArgs>
    ): Promise<Collection> {
        return this.prisma.collection.update<T>(args)
    }
    async delete<T extends Prisma.CollectionDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.CollectionDeleteArgs>
    ): Promise<Collection> {
        return this.prisma.collection.delete(args)
    }

    async findContents(
        parentId: string,
        args: Prisma.ContentFindManyArgs
    ): Promise<Content[]> {
        return this.prisma.collection
            .findUnique({
                where: { id: parentId },
            })
            .contents(args)
    }
}
