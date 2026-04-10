import uuid from '@lukeed/uuid';

// Note: I'm not using @actions/core here, because there is no point to install and embed
// such big library only for one simple command. It's an overkill.

const theUuid = uuid();
console.log(`::debug::UUID v4 generated: ${theUuid}`)
console.log(`::set-output name=uuid::${theUuid}`);
