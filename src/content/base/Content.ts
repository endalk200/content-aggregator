import { ObjectType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { IsString, ValidateNested, IsOptional, IsDate } from "class-validator"
import { Collection } from "../../collection/base/Collection"
import { Type } from "class-transformer"
@ObjectType()
class Content {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    canonicalUrl!: string

    @ApiProperty({
        required: false,
        type: () => Collection,
    })
    @ValidateNested()
    @Type(() => Collection)
    @IsOptional()
    collection?: Collection | null

    @ApiProperty({
        required: true,
    })
    @IsDate()
    @Type(() => Date)
    @Field(() => Date)
    createdAt!: Date

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    id!: string

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
    thumbnailSrc!: string | null

    @ApiProperty({
        required: true,
    })
    @IsDate()
    @Type(() => Date)
    @Field(() => Date)
    updatedAt!: Date
}
export { Content }
