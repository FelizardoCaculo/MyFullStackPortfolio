// First, we must import the schema creator
import { createSchema } from "sanity";

// Then import schema types from any plugins that might expose them
import { schemaTypes } from ".";
import testimonials from "./testimonials";
import works from "./works";
import brands from "./brands";
import abouts from "./abouts";
import skills from "./skills";
import workExperience from "./workExperience";
import experiences from "./experiences";
import contacts from "./contacts";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        testimonials,
        works,
        brands,
        abouts,
        skills,
        workExperience,
        experiences,
        contacts
    ]),
})