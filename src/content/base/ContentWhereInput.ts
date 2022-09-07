import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { StringFilter } from "../../util/StringFilter"
import { Type } from "class-transformer"
import { IsOptional, ValidateNested } from "class-validator"
import { CollectionWhereUniqueInput } from "../../collection/base/CollectionWhereUniqueInput"
@InputType()
class ContentWhereInput {
    @ApiProperty({
        required: false,
        type: StringFilter,
    })
    @Type(() => StringFilter)
    @IsOptional()
    @Field(() => StringFilter, {
        nullable: true,
    })
    canonicalUrl?: StringFilter

    @ApiProperty({
        required: false,
        type: () => CollectionWhereUniqueInput,
    })
    @ValidateNested()
    @Type(() => CollectionWhereUniqueInput)
    @IsOptional()
    @Field(() => CollectionWhereUniqueInput, {
        nullable: true,
    })
    collection?: CollectionWhereUniqueInput

    @ApiProperty({
        required: false,
        type: StringFilter,
    })
    @Type(() => StringFilter)
    @IsOptional()
    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter

    @ApiProperty({
        required: false,
        type: StringFilter,
    })
    @Type(() => StringFilter)
    @IsOptional()
    @Field(() => StringFilter, {
        nullable: true,
    })
    name?: StringFilter
}
export { ContentWhereInput }
