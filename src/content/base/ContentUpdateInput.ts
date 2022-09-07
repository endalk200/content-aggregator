import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsOptional, ValidateNested } from "class-validator"
import { CollectionWhereUniqueInput } from "../../collection/base/CollectionWhereUniqueInput"
import { Type } from "class-transformer"
@InputType()
class ContentUpdateInput {
    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    @Field(() => String, {
        nullable: true,
    })
    canonicalUrl?: string

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
    collection?: CollectionWhereUniqueInput | null

    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    @Field(() => String, {
        nullable: true,
    })
    name?: string

    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    @Field(() => String, {
        nullable: true,
    })
    thumbnailSrc?: string | null
}
export { ContentUpdateInput }
