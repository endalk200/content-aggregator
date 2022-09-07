import { Module } from "@nestjs/common"
import { ContentModuleBase } from "./base/content.module.base"
import { ContentService } from "./content.service"
import { ContentController } from "./content.controller"

@Module({
    imports: [ContentModuleBase],
    controllers: [ContentController],
    providers: [ContentService],
    exports: [ContentService],
})
export class ContentModule {}
