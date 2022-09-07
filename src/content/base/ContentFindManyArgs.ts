import { ArgsType, Field } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { ContentWhereInput } from "./ContentWhereInput"
import { Type } from "class-transformer"
import { ContentOrderByInput } from "./ContentOrderByInput"

@ArgsType()
class ContentFindManyArgs {
    @ApiProperty({
        required: false,
        type: () => ContentWhereInput,
    })
    @Field(() => ContentWhereInput, { nullable: true })
    @Type(() => ContentWhereInput)
    where?: ContentWhereInput

    @ApiProperty({
        required: false,
        type: [ContentOrderByInput],
    })
    @Field(() => [ContentOrderByInput], { nullable: true })
    @Type(() => ContentOrderByInput)
    orderBy?: Array<ContentOrderByInput>

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

export { ContentFindManyArgs }
