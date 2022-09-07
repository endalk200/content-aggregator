import { InputType, Field } from "@nestjs/graphql"
import { ContentWhereUniqueInput } from "../../content/base/ContentWhereUniqueInput"
import { ApiProperty } from "@nestjs/swagger"
@InputType()
class ContentCreateNestedManyWithoutCollectionsInput {
    @Field(() => [ContentWhereUniqueInput], {
        nullable: true,
    })
    @ApiProperty({
        required: false,
        type: () => [ContentWhereUniqueInput],
    })
    connect?: Array<ContentWhereUniqueInput>
}
export { ContentCreateNestedManyWithoutCollectionsInput }
