import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { ContentUpdateManyWithoutCollectionsInput } from "./ContentUpdateManyWithoutCollectionsInput"
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator"
import { Type } from "class-transformer"
@InputType()
class CollectionUpdateInput {
    @ApiProperty({
        required: false,
        type: () => ContentUpdateManyWithoutCollectionsInput,
    })
    @ValidateNested()
    @Type(() => ContentUpdateManyWithoutCollectionsInput)
    @IsOptional()
    @Field(() => ContentUpdateManyWithoutCollectionsInput, {
        nullable: true,
    })
    contents?: ContentUpdateManyWithoutCollectionsInput

    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    @Field(() => String, {
        nullable: true,
    })
    descriptions?: string | null

    @ApiProperty({
        required: false,
        type: Number,
    })
    @IsInt()
    @IsOptional()
    @Field(() => Number, {
        nullable: true,
    })
    numContents?: number

    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    @Field(() => String, {
        nullable: true,
    })
    title?: string
}
export { CollectionUpdateInput }
