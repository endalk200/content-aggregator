import { InputType, Field } from "@nestjs/graphql"
import { ContentWhereUniqueInput } from "../../content/base/ContentWhereUniqueInput"
import { ApiProperty } from "@nestjs/swagger"
@InputType()
class ContentUpdateManyWithoutCollectionsInput {
    @Field(() => [ContentWhereUniqueInput], {
        nullable: true,
    })
    @ApiProperty({
        required: false,
        type: () => [ContentWhereUniqueInput],
    })
    connect?: Array<ContentWhereUniqueInput>

    @Field(() => [ContentWhereUniqueInput], {
        nullable: true,
    })
    @ApiProperty({
        required: false,
        type: () => [ContentWhereUniqueInput],
    })
    disconnect?: Array<ContentWhereUniqueInput>

    @Field(() => [ContentWhereUniqueInput], {
        nullable: true,
    })
    @ApiProperty({
        required: false,
        type: () => [ContentWhereUniqueInput],
    })
    set?: Array<ContentWhereUniqueInput>
}
export { ContentUpdateManyWithoutCollectionsInput }
