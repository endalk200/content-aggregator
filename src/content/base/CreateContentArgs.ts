import { ArgsType, Field } from "@nestjs/graphql"
import { ContentCreateInput } from "./ContentCreateInput"

@ArgsType()
class CreateContentArgs {
    @Field(() => ContentCreateInput, { nullable: false })
    data!: ContentCreateInput
}

export { CreateContentArgs }
