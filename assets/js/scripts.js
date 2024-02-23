const body = document.querySelector('body')
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// https://stackoverflow.com/a/19176790
function IsOldWindows() {
    // var os_name = "Unknown";
    // if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) os_name="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.") != -1) return true;
    // if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) os_name="Windows 8";
    // if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) os_name="Windows 7";
    // if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) os_name="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.") != -1) return true;
    // if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) os_name="Windows 2000";
    // if (window.navigator.userAgent.indexOf("Mac")            != -1) os_name="Mac/iOS";
    // if (window.navigator.userAgent.indexOf("X11")            != -1) os_name="UNIX";
    // if (window.navigator.userAgent.indexOf("Linux")          != -1) os_name="Linux";
    return false;
}

function GetFastAndSlow(json, old_windows) {
    let fast = {};
    let slow = {};
    // console.log(json.files);
    for (let obj of json.files) {
        // console.log(obj);
        if (obj.tags && obj.tags.includes( (old_windows ? 'lt_' : '') + 'win10_fast' )) {
            fast = obj;
        }
        if (obj.tags && obj.tags.includes( (old_windows ? 'lt_' : '') + 'win10_compat' )) {
            slow = obj;
        }
    }
    return [fast, slow];
}

const baseDownloadLink = "https://github.com/official-stockfish/Stockfish/releases/download/sf_16.1/";

const windows_table = document.getElementById('windows-table');
if (windows_table) {
    fetch('/windows.json?a').then(response => response.json()).then(data => {
        // console.log(data);
        const fast_and_slow = GetFastAndSlow(data, IsOldWindows());
        // console.log(fast_and_slow);
        windows_table.querySelector('.fast').href = baseDownloadLink + fast_and_slow[0].file;
        windows_table.querySelector('.fast span').textContent = fast_and_slow[0].arch;
        windows_table.querySelector('.compat').href = baseDownloadLink + fast_and_slow[1].file;
        windows_table.querySelector('.compat span').textContent = fast_and_slow[1].arch;
    })
}

const linux_table = document.getElementById('linux-table');
if (linux_table) {
    fetch('/linux.json?a').then(response => response.json()).then(data => {
        const fastFile = data.files.find(file => file.tags && file.tags.includes('fast'));
        const compatFile = data.files.find(file => file.tags && file.tags.includes('compat'));

        linux_table.querySelector('.fast').href = fastFile ? baseDownloadLink + fastFile.file : '';
        linux_table.querySelector('.fast span').textContent = fastFile ? fastFile.arch : '';

        linux_table.querySelector('.compat').href = compatFile ? baseDownloadLink + compatFile.file : '';
        linux_table.querySelector('.compat span').textContent = compatFile ? compatFile.arch : '';
    })
}

const arm_table = document.getElementById('arm-table');
if (arm_table) {
    fetch('/arm.json?a').then(response => response.json()).then(data => {
        const fastFile = data.files.find(file => file.tags && file.tags.includes('fast'));
        const compatFile = data.files.find(file => file.tags && file.tags.includes('compat'));

        arm_table.querySelector('.fast').href = fastFile ? baseDownloadLink + fastFile.file : '';
        arm_table.querySelector('.fast span').textContent = fastFile ? fastFile.arch : '';

        arm_table.querySelector('.compat').href = compatFile ? baseDownloadLink + compatFile.file : '';
        arm_table.querySelector('.compat span').textContent = compatFile ? compatFile.arch : '';
    })
}