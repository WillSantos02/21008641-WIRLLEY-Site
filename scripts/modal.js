function iniciaModal(){
    const modal = document.getElementById('modalForm');
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        console.log(e.target.id);

        if(e.target.id == 'modalForm' || e.target.id == 'fechar'){
            modal.classList.remove('mostrar');
        }
    });
}

const btnext = document.querySelector('.btnext');
btnext.addEventListener('click', () => iniciaModal('modalForm'));