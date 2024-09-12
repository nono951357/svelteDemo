<script>
    const l = Array(99).fill(0);
</script>

<h1>Kocka színező</h1>

<div class="g">
    {#each l as _}
        <button class="l{_}"
            on:click={() =>
                _ = _ == 1 ? 0 : 1
            }
            on:keydown={(event) => event.key === 'Enter' && (_ = _ == 1 ? 0 : 1)}
            type="button"
            aria-pressed={_ == 1}
        ></button>
    {/each}
</div>

<style>
:root {
    --color-red: #ff4d4d;
    --color-blue: #4d79ff;
    --border-color: #333;
    --button-size: 100px;
    --button-height: 41px;
    --button-padding: 5px;
    --transition-duration: 0.3s;
}

.g {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--button-size), 1fr));
    gap: 10px;
    padding: 10px;
}

.g button {
    border: 1px solid var(--border-color);
    width: var(--button-size);
    height: var(--button-height);
    padding: var(--button-padding);
    cursor: pointer;
    transition: background-color var(--transition-duration), transform var(--transition-duration);
}

.g button.l0 {
    background-color: var(--color-red);
}

.g button.l1 {
    background-color: var(--color-blue);
}

.g button:hover {
    transform: scale(1.05);
}

.g button:focus {
    outline: 2px solid var(--border-color);
    outline-offset: 2px;
}
</style>