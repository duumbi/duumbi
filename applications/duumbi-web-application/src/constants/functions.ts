import { MdOutlineSchema } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";

export const ApplicationDesignerConst = {

    toolbarItems: [
        {
            key: "schema",
            title: "Schema",
            icon: MdOutlineSchema,
        },
        {
            key: "ingest",
            title: "Ingest",
            icon: MdDataSaverOff,
        },
        {
            key: "content-editor",
            title: "Content editor",
            icon: LiaUserEditSolid,
        },
    ]

}