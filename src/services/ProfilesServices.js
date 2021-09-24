import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfilesServices {
  async getProfileById(id) {
    const res = await api.get('/api/profiles/' + id)
    logger.log('profile res', res)
    AppState.profile = res.data
  }
}
export const profilesService = new ProfilesServices()
