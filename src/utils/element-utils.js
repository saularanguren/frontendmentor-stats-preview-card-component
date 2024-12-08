export const increase_stats = (array_id, array_number, array_tag) => {
    for(let i = 0; i < array_id.length; i++) {
        let count = 0;
        let time = null;

        time = (array_number[i] > 100) ? 1 : 50;

        const interval = setInterval(() => {
            document.querySelector(array_id[i]).textContent = count;
            (array_number[i] > 100) ? count+=9 : count++;
                
            if(count > array_number[i]) {
                document.querySelector(array_id[i]).textContent = (count-1) + array_tag[i];
                clearInterval(interval)
            }
        }, time)            
    }
}