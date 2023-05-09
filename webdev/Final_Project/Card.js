export default{
    template:
    `
    <div class="card" style="width: 18rem;">
        <img v-bind:src="movieobj.img" alt="">
        <div class="card-body">
            <h5 class="card-title">{{movieobj.title}}</h5>
            <p class="card-text">{{movieobj.overview}}</p>
        </div>
    </div>
                    
    `,
    props:["movieobj"]
}