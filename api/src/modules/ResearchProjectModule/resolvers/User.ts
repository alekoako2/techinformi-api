import { Context } from '@interfaces/apollo/context'

export const User = {
  researchProjects: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id })
  },
}
