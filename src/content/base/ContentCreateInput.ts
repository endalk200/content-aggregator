import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { IsString, ValidateNested, IsOptional } from "class-validator"
import { CollectionWhereUniqueInput } from "../../collection/base/CollectionWhereUniqueInput"
import { Type } from "class-transformer"
@InputType()
class ContentCreateInput {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    canonicalUrl!: string

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
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    name!: string

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
export { ContentCreateInput }
