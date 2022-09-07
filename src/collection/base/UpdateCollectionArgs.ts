import { ArgsType, Field } from "@nestjs/graphql"
import { CollectionWhereUniqueInput } from "./CollectionWhereUniqueInput"
import { CollectionUpdateInput } from "./CollectionUpdateInput"

@ArgsType()
class UpdateCollectionArgs {
    @Field(() => CollectionWhereUniqueInput, { nullable: false })
    where!: CollectionWhereUniqueInput
    @Field(() => CollectionUpdateInput, { nullable: false })
    data!: CollectionUpdateInput
}

export { UpdateCollectionArgs }
