import { ArgsType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { CollectionWhereInput } from "./CollectionWhereInput"
import { Type } from "class-transformer"
import { CollectionOrderByInput } from "./CollectionOrderByInput"

@ArgsType()
class CollectionFindManyArgs {
    @ApiProperty({
        required: false,
        type: () => CollectionWhereInput,
    })
    @Field(() => CollectionWhereInput, { nullable: true })
    @Type(() => CollectionWhereInput)
    where?: CollectionWhereInput

    @ApiProperty({
        required: false,
        type: [CollectionOrderByInput],
    })
    @Field(() => [CollectionOrderByInput], { nullable: true })
    @Type(() => CollectionOrderByInput)
    orderBy?: Array<CollectionOrderByInput>

    @ApiProperty({
        required: false,
        type: Number,
    })
    @Field(() => Number, { nullable: true })
    @Type(() => Number)
    skip?: number

    @ApiProperty({
        required: false,
        type: Number,
    })
    @Field(() => Number, { nullable: true })
    @Type(() => Number)
    take?: number
}

export { CollectionFindManyArgs }
