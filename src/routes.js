/**
 * Add your other routes below.
 * Each model might have a file that declares its
 * routes, such as the User model.
 *
 * @param server
 */

import sampleRoute from './sample/sampleRoute';

export default function(server) {
  sampleRoute(server);
}
