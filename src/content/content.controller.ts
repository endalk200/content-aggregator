import * as common from "@nestjs/common"
import * as swagger from "@nestjs/swagger"
import * as nestAccessControl from "nest-access-control"
import { ContentService } from "./content.service"
import { ContentControllerBase } from "./base/content.controller.base"

@swagger.ApiTags("contents")
@common.Controller("contents")
export class ContentController extends ContentControllerBase {
    constructor(
        protected readonly service: ContentService,
        @nestAccessControl.InjectRolesBuilder()
        protected readonly rolesBuilder: nestAccessControl.RolesBuilder
    ) {
        super(service, rolesBuilder)
    }
}
