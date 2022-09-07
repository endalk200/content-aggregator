import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { ContentCreateNestedManyWithoutCollectionsInput } from "./ContentCreateNestedManyWithoutCollectionsInput"
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator"
import { Type } from "class-transformer"
@InputType()
class CollectionCreateInput {
    @ApiProperty({
        required: false,
        type: () => ContentCreateNestedManyWithoutCollectionsInput,
    })
    @ValidateNested()
    @Type(() => ContentCreateNestedManyWithoutCollectionsInput)
    @IsOptional()
    @Field(() => ContentCreateNestedManyWithoutCollectionsInput, {
        nullable: true,
    })
    contents?: ContentCreateNestedManyWithoutCollectionsInput

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
}
export { CollectionCreateInput }
