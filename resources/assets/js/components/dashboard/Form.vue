<template>
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">{{ title }} <span style="color: red;">{{ prefix }}</span></h3>
                    <div class="box-tools">
                        <div class="form-group">
                            <slot name="buttons"></slot>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default() {
                    return null
                }
            },
            prefix: {
                default() {
                    return null
                }
            }
        }
    }
</script>
