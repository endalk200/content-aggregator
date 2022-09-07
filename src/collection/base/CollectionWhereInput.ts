import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { ContentListRelationFilter } from "../../content/base/ContentListRelationFilter"
import { ValidateNested, IsOptional } from "class-validator"
import { Type } from "class-transformer"
import { StringNullableFilter } from "../../util/StringNullableFilter"
import { StringFilter } from "../../util/StringFilter"
import { IntFilter } from "../../util/IntFilter"
@InputType()
class CollectionWhereInput {
    @ApiProperty({
        required: false,
        type: () => ContentListRelationFilter,
    })
    @ValidateNested()
    @Type(() => ContentListRelationFilter)
    @IsOptional()
    @Field(() => ContentListRelationFilter, {
        nullable: true,
    })
    contents?: ContentListRelationFilter

    @ApiProperty({
        required: false,
        type: StringNullableFilter,
    })
    @Type(() => StringNullableFilter)
    @IsOptional()
    @Field(() => StringNullableFilter, {
        nullable: true,
    })
    descriptions?: StringNullableFilter

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
        type: IntFilter,
    })
    @Type(() => IntFilter)
    @IsOptional()
    @Field(() => IntFilter, {
        nullable: true,
    })
    numContents?: IntFilter

    @ApiProperty({
        required: false,
        type: StringFilter,
    })
    @Type(() => StringFilter)
    @IsOptional()
    @Field(() => StringFilter, {
        nullable: true,
    })
    title?: StringFilter
}
export { CollectionWhereInput }
