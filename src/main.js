import fs from 'node:fs'
import uuid from '@lukeed/uuid';

// Note: I'm not using @actions/core here, because there is no point to install and embed
// such big library only for one simple command. It's an overkill.

function debug(msg) {
    console.log(`::debug::${msg}`);
}

function setOutput(name, value) {
    // https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/
    fs.writeFileSync(process.env['GITHUB_OUTPUT'], `${name}=${value}`, { flag: 'a' });
}

const theUuid = uuid();
debug(`UUID v4 generated: ${theUuid}`)
setOutput('uuid', theUuid);
