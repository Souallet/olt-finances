import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  Commentaire: z.string(),
  "Date de l'opération": z.number(),
  "Date de la transaction": z.number(),
  "IBAN du compte": z.string(),
  Id: z.number(),
  "Intitulé de la transaction": z.string(),
  Label: z.string(),
  "Montant TTC": z.number(),
  Tags: z.string().optional(),
  "Type d'opération": z.string(),
});

export type Task = z.infer<typeof taskSchema>;
