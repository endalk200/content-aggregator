import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { CollectionWhereInput } from "./CollectionWhereInput"
import { ValidateNested, IsOptional } from "class-validator"
import { Type } from "class-transformer"

@InputType()
class CollectionListRelationFilter {
    @ApiProperty({
        required: false,
        type: () => CollectionWhereInput,
    })
    @ValidateNested()
    @Type(() => CollectionWhereInput)
    @IsOptional()
    @Field(() => CollectionWhereInput, {
        nullable: true,
    })
    every?: CollectionWhereInput

    @ApiProperty({
        required: false,
        type: () => CollectionWhereInput,
    })
    @ValidateNested()
    @Type(() => CollectionWhereInput)
    @IsOptional()
    @Field(() => CollectionWhereInput, {
        nullable: true,
    })
    some?: CollectionWhereInput

    @ApiProperty({
        required: false,
        type: () => CollectionWhereInput,
    })
    @ValidateNested()
    @Type(() => CollectionWhereInput)
    @IsOptional()
    @Field(() => CollectionWhereInput, {
        nullable: true,
    })
    none?: CollectionWhereInput
}
export { CollectionListRelationFilter }
