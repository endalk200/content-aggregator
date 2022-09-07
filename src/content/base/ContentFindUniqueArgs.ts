import { ArgsType, Field } from "@nestjs/graphql"
import { ContentWhereUniqueInput } from "./ContentWhereUniqueInput"

@ArgsType()
class ContentFindUniqueArgs {
    @Field(() => ContentWhereUniqueInput, { nullable: false })
    where!: ContentWhereUniqueInput
}

export { ContentFindUniqueArgs }
