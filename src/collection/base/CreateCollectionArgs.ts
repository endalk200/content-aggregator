import { ArgsType, Field } from "@nestjs/graphql"
import { CollectionCreateInput } from "./CollectionCreateInput"

@ArgsType()
class CreateCollectionArgs {
    @Field(() => CollectionCreateInput, { nullable: false })
    data!: CollectionCreateInput
}

export { CreateCollectionArgs }
