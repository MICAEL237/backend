import z from "zod";

export const SchemaSigna = z.object({
  description: z.string(),
  categorie: z.string(),
  image: z.string("imge absente").optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  status: z.enum(["reçus", "en_cours", "rejetter", "resolus"]),
  user: z.string("pas de user").optional(),
  commune: z.string("pas de commune"),
});

export type TypeSigna = z.infer<typeof SchemaSigna>

