import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { SortOrder } from "../../util/SortOrder"

@InputType({
    isAbstract: true,
    description: undefined,
})
class CollectionOrderByInput {
    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    createdAt?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    descriptions?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    id?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    numContents?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    title?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    updatedAt?: SortOrder
}

export { CollectionOrderByInput }
