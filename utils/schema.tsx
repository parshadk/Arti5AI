import { boolean, pgTable,serial, text , varchar } from "drizzle-orm/pg-core";

export const aiOP=pgTable('aiOP',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')

});

export const userSubscription=pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinDate:varchar('joinData')
})