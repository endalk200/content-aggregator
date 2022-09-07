import { ObjectType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { Content } from "../../content/base/Content"
import { ValidateNested, IsOptional, IsDate, IsString, IsInt } from "class-validator"
import { Type } from "class-transformer"
@ObjectType()
class Collection {
    @ApiProperty({
        required: false,
        type: () => [Content],
    })
    @ValidateNested()
    @Type(() => Content)
    @IsOptional()
    contents?: Array<Content>

    @ApiProperty({
        required: true,
    })
    @IsDate()
    @Type(() => Date)
    @Field(() => Date)
    createdAt!: Date

    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    @Field(() => String, {
        nullable: true,
    })
    descriptions!: string | null

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    id!: string

    @ApiProperty({
        required: true,
        type: Number,
    })
    @IsInt()
    @Field(() => Number)
    numContents!: number

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    title!: string

    @ApiProperty({
        required: true,
    })
    @IsDate()
    @Type(() => Date)
    @Field(() => Date)
    updatedAt!: Date
}
export { Collection }
