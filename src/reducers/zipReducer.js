
import { ENTER_ZIP } from '../actions/index.js';

export default (zip = [], action) => {
  switch (action.type) {
      case ENTER_ZIP:
          return zip.concat(action.payload);
      default:
          return zip;
  }
};