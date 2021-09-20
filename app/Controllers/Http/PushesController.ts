import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Ws from 'App/Services/Ws'

export default class PushesController {
  public async send({ response }: HttpContextContract) {
    Ws.io.emit('visits:visit:updated:123', { id: 123, name: 'John Smith', status: 'checkedIn' })

    return response.json({ success: true, message: 'sent' })
  }
}
