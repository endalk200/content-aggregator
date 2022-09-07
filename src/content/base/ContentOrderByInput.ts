import { InputType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { SortOrder } from "../../util/SortOrder"

@InputType({
    isAbstract: true,
    description: undefined,
})
class ContentOrderByInput {
    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    canonicalUrl?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    collectionId?: SortOrder

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
    id?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    name?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    thumbnailSrc?: SortOrder

    @ApiProperty({
        required: false,
        enum: ["asc", "desc"],
    })
    @Field(() => SortOrder, {
        nullable: true,
    })
    updatedAt?: SortOrder
}

export { ContentOrderByInput }
