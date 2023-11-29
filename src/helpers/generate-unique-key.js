import { v4 as uuidv4 } from 'uuid'

function generateUniqueKey() {
  console.log(uuidv4())
  return uuidv4()
}

export default generateUniqueKey
