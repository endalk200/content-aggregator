import { Module } from "@nestjs/common"
import { CollectionModuleBase } from "./base/collection.module.base"
import { CollectionService } from "./collection.service"
import { CollectionController } from "./collection.controller"

@Module({
    imports: [CollectionModuleBase],
    controllers: [CollectionController],
    providers: [CollectionService],
    exports: [CollectionService],
})
export class CollectionModule {}
