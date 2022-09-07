import { ArgsType, Field } from "@nestjs/graphql"
import { ContentWhereUniqueInput } from "./ContentWhereUniqueInput"
import { ContentUpdateInput } from "./ContentUpdateInput"

@ArgsType()
class UpdateContentArgs {
    @Field(() => ContentWhereUniqueInput, { nullable: false })
    where!: ContentWhereUniqueInput
    @Field(() => ContentUpdateInput, { nullable: false })
    data!: ContentUpdateInput
}

export { UpdateContentArgs }
