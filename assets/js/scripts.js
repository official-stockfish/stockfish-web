const body = document.querySelector('body')
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// https://stackoverflow.com/a/19176790
function isOldWindows() {
    return /Windows NT [5-6]\./.test(navigator.userAgent);
}

function getFastAndSlow(json, old_windows) {
    let fast = {};
    let slow = {};
    for (let obj of json.files) {
        if (obj.tags && obj.tags.includes( (old_windows ? 'lt_' : '') + 'win10_fast' )) {
            fast = obj;
        }
        if (obj.tags && obj.tags.includes( (old_windows ? 'lt_' : '') + 'win10_compat' )) {
            slow = obj;
        }
    }
    return [fast, slow];
}

const baseDownloadLink = "https://github.com/official-stockfish/Stockfish/releases/latest/download/";

const windowsTable = document.getElementById('windows-table');
if (windowsTable) {
    fetch('/windows.json?a').then(response => response.json()).then(data => {
        const fast_and_slow = getFastAndSlow(data, isOldWindows());
        windowsTable.querySelector('.fast').href = baseDownloadLink + fast_and_slow[0].file;
        windowsTable.querySelector('.fast span').textContent = fast_and_slow[0].arch;
        windowsTable.querySelector('.compat').href = baseDownloadLink + fast_and_slow[1].file;
        windowsTable.querySelector('.compat span').textContent = fast_and_slow[1].arch;
    })
}

const linuxTable = document.getElementById('linux-table');
if (linuxTable) {
    fetch('/linux.json?a').then(response => response.json()).then(data => {
        const fastFile = data.files.find(file => file.tags && file.tags.includes('fast'));
        const compatFile = data.files.find(file => file.tags && file.tags.includes('compat'));
        linuxTable.querySelector('.fast').href = fastFile ? baseDownloadLink + fastFile.file : '';
        linuxTable.querySelector('.fast span').textContent = fastFile ? fastFile.arch : '';
        linuxTable.querySelector('.compat').href = compatFile ? baseDownloadLink + compatFile.file : '';
        linuxTable.querySelector('.compat span').textContent = compatFile ? compatFile.arch : '';
    })
}

const armTable = document.getElementById('arm-table');
if (armTable) {
    fetch('/arm.json?a').then(response => response.json()).then(data => {
        const fastFile = data.files.find(file => file.tags && file.tags.includes('fast'));
        const compatFile = data.files.find(file => file.tags && file.tags.includes('compat'));
        armTable.querySelector('.fast').href = fastFile ? baseDownloadLink + fastFile.file : '';
        armTable.querySelector('.fast span').textContent = fastFile ? fastFile.arch : '';
        armTable.querySelector('.compat').href = compatFile ? baseDownloadLink + compatFile.file : '';
        armTable.querySelector('.compat span').textContent = compatFile ? compatFile.arch : '';
    })
}