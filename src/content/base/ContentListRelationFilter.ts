import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { ContentWhereInput } from "./ContentWhereInput"
import { ValidateNested, IsOptional } from "class-validator"
import { Type } from "class-transformer"

@InputType()
class ContentListRelationFilter {
    @ApiProperty({
        required: false,
        type: () => ContentWhereInput,
    })
    @ValidateNested()
    @Type(() => ContentWhereInput)
    @IsOptional()
    @Field(() => ContentWhereInput, {
        nullable: true,
    })
    every?: ContentWhereInput

    @ApiProperty({
        required: false,
        type: () => ContentWhereInput,
    })
    @ValidateNested()
    @Type(() => ContentWhereInput)
    @IsOptional()
    @Field(() => ContentWhereInput, {
        nullable: true,
    })
    some?: ContentWhereInput

    @ApiProperty({
        required: false,
        type: () => ContentWhereInput,
    })
    @ValidateNested()
    @Type(() => ContentWhereInput)
    @IsOptional()
    @Field(() => ContentWhereInput, {
        nullable: true,
    })
    none?: ContentWhereInput
}
export { ContentListRelationFilter }
