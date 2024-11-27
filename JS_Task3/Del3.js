// // FIrst function.
// //----------------------------------------------------

// const canvas = document.getElementById('mazeCanvas');
// const ctx = canvas.getContext('2d');

// const maze = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//     [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
// ];

// const cellSize = 50;

// function drawMaze() {
//     for (let row = 0; row < maze.length; row++) {
//         for (let col = 0; col < maze[row].length; col++) {
//             if (maze[row][col] === 1) {
//                 ctx.fillStyle = 'black';
//             } else {
//                 ctx.fillStyle = 'white';
//             }
//             ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
//         }
//     }
// }

// drawMaze();



// Second function.
// -------------------------------------------------------------------------

function isBalanced(str) {
    const br = "(){}[]";
    const st = [];

    for (let i = 0; i < str.length; ++i) {
        
        const ch = str[i];
        const ind = br.indexOf(ch);
    
        if (ind >= 0) {
            
            if (ind & 1) {
                
                if (!st.length) return false;
                
                const last_br = st.pop();
                
                if (last_br != br[ind - 1]) return false;
            } else { 
                st.push(ch);
            }
        }
    }
    return !st.length;
}

console.log(isBalanced("(This is ) [calls] {balanced}"));
console.log(isBalanced("(This is( [calls} ] disbalance)"));




