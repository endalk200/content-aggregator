import { ArgsType, Field } from "@nestjs/graphql"
import { ContentWhereUniqueInput } from "./ContentWhereUniqueInput"

@ArgsType()
class DeleteContentArgs {
    @Field(() => ContentWhereUniqueInput, { nullable: false })
    where!: ContentWhereUniqueInput
}

export { DeleteContentArgs }
