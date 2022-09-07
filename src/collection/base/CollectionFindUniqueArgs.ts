import { ArgsType, Field } from "@nestjs/graphql"
import { CollectionWhereUniqueInput } from "./CollectionWhereUniqueInput"

@ArgsType()
class CollectionFindUniqueArgs {
    @Field(() => CollectionWhereUniqueInput, { nullable: false })
    where!: CollectionWhereUniqueInput
}

export { CollectionFindUniqueArgs }
