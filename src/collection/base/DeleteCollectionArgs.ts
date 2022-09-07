import { ArgsType, Field } from "@nestjs/graphql"
import { CollectionWhereUniqueInput } from "./CollectionWhereUniqueInput"

@ArgsType()
class DeleteCollectionArgs {
    @Field(() => CollectionWhereUniqueInput, { nullable: false })
    where!: CollectionWhereUniqueInput
}

export { DeleteCollectionArgs }
