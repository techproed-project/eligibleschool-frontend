"use server";

import { response } from "@/helpers/form-validation";
import { deleteAdmin } from "@/services/admin-service";

export const deleteAdminAction = async (id) => {
    console.log("Deleteing...")

	if (!id) throw new Error("Id is missing");



    const res = await deleteAdmin(id);
    const data = await res.text();

    if(!res.ok){
        return response(false, data);
    }

    // revalidate
    return response(true, data);

};
